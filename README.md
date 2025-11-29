# Health-connect

README du projet **aireTech** — application IoT + IA + Mobile

> Projet qui combine des stations de mesure de la qualité de l'air, un backend Python, une IA (TensorFlow) pour prédire les risques respiratoires et une application mobile React Native affichant carte, prédictions et itinéraire sûr.

---

## Table des matières

1. Architecture globale
2. Arborescence recommandée du projet
3. Description des composants
4. Prérequis & dépendances
5. Installation et exécution locale
6. Variables d'environnement importantes
7. CI / CD & conteneurisation
8. Tests et qualité
9. Sécurité & protection des données
10. Extensions et roadmap

---

## 1. Architecture globale (résumé)

L'architecture suit un modèle microservices/monolithe découplé selon les besoins :

```
[Stations IoT] --> (MQ/HTTP) --> [Ingest Service] --> [Time-series DB] --> [Aggregator] --> [Prediction (TensorFlow)] --> [API Backend (FastAPI/Django)] --> [React Native App]
                                                       |                                              |
                                                       v                                              v
                                                  [Model Store]                                   [MapService / RoutePlanner]
                                                      |
                                                      v
                                                 [Monitoring / Logs]
```

* **Stations IoT** : capteurs (PM2.5, PM10, NO2, O3, CO, temp, humidité) envoient readings.
* **Ingest Service** : valide, normalise et publie les lectures sur une base temps-série (TimescaleDB/InfluxDB) ou Kafka.
* **Aggregator** : agrège lectures en `AirSample` (par zone / intervalle) pour l'IA.
* **Prediction (TensorFlow)** : API ou service qui charge le modèle TF et renvoie `RiskPrediction`.
* **Backend API (Python)** : gère utilisateurs, profils santé, stockage des prédictions, notifications push, plus endpoints pour la carte et l'itinéraire.
* **React Native App** : UI mobile (Android/iOS) pour affichage carte (heatmap), profil, notifications et demande d'itinéraire.
* **MapService / RoutePlanner** : calcule itinéraires évitant `InfectionZones` (peut intégrer GraphHopper / OSRM ou un service cloud).

---

## 2. Arborescence recommandée (mono-repo ou multi-repo selon préférence)

> Option recommandée : **mono-repo** pour facilité (lerna/pnpm workspaces ou simplement git subfolders)

```
/aireTech
├── README.md
├── infra/                          # scripts infra (terraform, k8s, docker-compose)
│   ├── docker-compose.yml
│   ├── k8s/
│   └── terraform/

├── services/
│   ├── ingest_service/             # ingestion API (python)
│   │   ├── Dockerfile
│   │   ├── app/
│   │   │   ├── main.py
│   │   │   ├── api/
│   │   │   └── models/
│   │   └── requirements.txt
│   │
│   ├── timeseries_db/              # infra (TimescaleDB/Influx) config
│   │
│   ├── prediction_service/         # TensorFlow model serving (python)
│   │   ├── Dockerfile
│   │   ├── model/                   # modèles entraînés (.pb, SavedModel)
│   │   ├── serve.py                 # wrapper tf-serving simple (FastAPI/Flask)
│   │   └── requirements.txt
│   │
│   ├── backend_api/                # API principale (FastAPI or Django REST)
│   │   ├── Dockerfile
│   │   ├── app/
│   │   │   ├── main.py
│   │   │   ├── routers/
│   │   │   ├── services/
│   │   │   ├── repositories/
│   │   │   └── models/
│   │   └── requirements.txt
│   │
│   └── routeplanner/               # service de routage / map utilities
│       ├── Dockerfile
│       └── app/

├── mobile/                         # React Native app
│   ├── app.json
│   ├── package.json
│   ├── src/
│   │   ├── screens/
│   │   ├── components/
│   │   ├── services/                # api client, map, notifications
│   │   └── navigation/
│   └── android/ ios/

├── docs/
│   ├── architecture.md
│   └── data_dictionary.md

├── experiments/                    # notebooks, data exploration, training
│   ├── notebooks/
│   └── datasets/

└── scripts/
    ├── setup_local.sh
    └── seed_db.py
```

---

## 3. Description des composants (plus de détails)

### Ingest Service

* Endpoint pour recevoir readings depuis les stations (HTTP POST / MQTT).
* Validation et normalisation des mesures.
* Publication sur Kafka ou insertion directe dans TimescaleDB.
* Authentification par token (mutual TLS ou clé API).

### Time-series DB

* Stocke `particle_readings` en haute fréquence.
* Requêtes pour heatmap et agrégation temporelle.

### Prediction Service (TensorFlow)

* Contient le modèle entraîné (SavedModel) et un endpoint `/predict`.
* Reçoit un `AirSample` + `HealthProfile` et renvoie `RiskPrediction`.
* Use-case: servir en FastAPI, ou TF Serving / Triton pour production.

### Backend API (Python)

* Gestion utilisateurs (auth, profils santé), sauvegarde des prédictions, alerts et webhooks.
* Endpoints exposés pour mobile : `/login`, `/profile`, `/predictions`, `/map/zones`, `/route`.
* Implémente logique d'autorisation et confidentialité.

### Mobile (React Native)

* Authentification, affichage carte (react-native-maps), heatmap overlay.
* Affiche prédictions, recommandations, notifications push.
* Permet commande de route sûre (origin/destination) en demandant au backend RoutePlanner.

### Route Planner

* Peut intégrer OSRM/GraphHopper pour le routing et appliquer un coût additionnel pour zones à éviter.
* Retourne `Route` avec `distance`, `duration`, `safety_score`.

---

## 4. Prérequis & dépendances

### Outils

* Node.js >= 16
* Yarn ou npm
* React Native CLI / Expo (selon choix)
* Python 3.9+
* Docker & docker-compose
* PostgreSQL + TimescaleDB or InfluxDB
* Kafka (optionnel)

### Librairies recommandées

* Backend: FastAPI (uvicorn), SQLAlchemy/Databases, Pydantic
* Prediction: TensorFlow / TensorFlow Serving
* Mobile: react-native, react-native-maps, @react-native-async-storage/async-storage, redux or Zustand
* Dev: pytest, black/ruff (python), eslint/prettier (JS)

---

## 5. Installation et exécution locale (exemple rapide)

### 1) Cloner le repo

```bash
git clone git@github.com:tonorg/aireTech.git
cd aireTech
```

### 2) Lancer infra locale (docker-compose)

```bash
cd infra
docker-compose up -d
# monte TimescaleDB, Kafka (si nécessaire), Redis
```

### 3) Backend (dev)

```bash
cd services/backend_api
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

### 4) Prediction service (dev)

```bash
cd services/prediction_service
# installer requirements, lancer serve.py (FastAPI wrapper)
uvicorn serve:app --reload --port 8501
```

### 5) Mobile (dev)

```bash
cd mobile
yarn install
# si Expo
expo start
# ou React Native CLI (android / ios)
```

---

## 6. Variables d'environnement importantes

**Backend**

```
DATABASE_URL=postgresql://user:pass@db:5432/airetech
TIMESCALE_DB=postgresql://...
PREDICTION_URL=http://prediction-service:8501/predict
JWT_SECRET=changeme
SENTRY_DSN=
```

**Ingest**

```
INGEST_API_KEY=secret-station-key
MQ_BROKER=kafka:9092
```

**Mobile**

```
API_BASE=https://api.airetech.example.com
SENTRY_DSN=
PUSH_NOTIFICATIONS_KEY=
```

---

## 7. CI / CD & conteneurisation

* Utiliser Docker pour chaque service. Fournir `Dockerfile` minimal.
* CI: GitHub Actions pipeline build/test, publish images to registry (GHCR/ECR).
* CD: Helm charts + ArgoCD / Flux pour déploiement Kubernetes.
* Runbook pour rollback & migrations DB (liquibase/flyway or alembic).

---

## 8. Tests et qualité

* **Backend**: pytest (unit + integration), tests d'API via httpx/requests.
* **Prediction**: notebooks tests (sanity checks), tests d'inférence avec fixtures.
* **Mobile**: jest + detox (ou playwright) pour tests E2E.
* Linting & format: pre-commit hooks + CI checks.

---

## 9. Sécurité & protection des données

* Chiffrement en transit (TLS) et at-rest (DB encryption pour données de santé).
* Stockage minimal des données personnelles (obfuscation / pseudonymisation).
* Conserver consentement explicite pour données de santé et respecter la législation locale (RGPD si applicable).
* Limiter accès aux endpoints sensibles via RBAC et audit logs.

---

## 10. Extensions & roadmap (exemples)

1. Version 1 (MVP): station ingestion, heatmap live, simple prediction local, app basic.
2. v1.1: routing safe, push alerts, user profile details.
3. v2: modèles spatio-temporels (forecasting), versioning du modèle, explainability.
4. v3: partage communautaire (crowdsourcing), intégration santé publique.

---

## Annexes utiles

* **PlantUML** du diagramme de classes disponible dans `docs/diagramme_classes.puml`.
* **Data dictionary**: `docs/data_dictionary.md` avec schéma SQL recommandé.

---

> Si tu veux, je peux :
>
> * générer automatiquement le `docker-compose.yml` minimal pour dev,
> * créer les `Dockerfile` de base pour backend/prediction/mobile,
> * ou générer un README en PDF téléchargeable.

Fin du README.

## 📱 Mobile App – React Native : Arborescence

```
app/
├── src/
│   ├── api/               # Appels API vers le backend & IA
│   │   ├── client.ts
│   │   ├── auth.ts
│   │   ├── predictions.ts
│   │   └── stations.ts
│   │
│   ├── components/        # Composants réutilisables
│   │   ├── buttons/
│   │   ├── cards/
│   │   └── layout/
│   │
│   ├── screens/           # Pages
│   │   ├── LoginScreen.tsx
│   │   ├── HomeScreen.tsx
│   │   ├── MapScreen.tsx
│   │   ├── PredictionScreen.tsx
│   │   ├── HealthStatusScreen.tsx
│   │   └── SettingsScreen.tsx
│   │
│   ├── navigation/        # Navigation (stack / tabs)
│   │   ├── AppNavigator.tsx
│   │   └── AuthNavigator.tsx
│   │
│   ├── context/           # Context API
│   │   ├── AuthContext.tsx
│   │   └── PredictionContext.tsx
│   │
│   ├── hooks/             # Hooks personnalisés
│   │   ├── useAuth.ts
│   │   ├── useLocation.ts
│   │   └── usePrediction.ts
│   │
│   ├── services/          # GPS, stockage, permissions
│   │   ├── locationService.ts
│   │   ├── healthService.ts
│   │   └── mapService.ts
│   │
│   ├── utils/             # Helpers
│   │   ├── validators.ts
│   │   ├── formatters.ts
│   │   └── constants.ts
│   │
│   ├── assets/            # Images, icônes
│   │   ├── images/
│   │   ├── icons/
│   │   └── fonts/
│   │
│   └── styles/            # Thème global
│       ├── colors.ts
│       ├── typography.ts
│       └── theme.ts
│
├── app.json
├── package.json
├── tsconfig.json
└── README.md
```
## 🤖 Backend Python(django.js)

```
backend-django/
├── manage.py
├── requirements.txt
├── .env
├── .gitignore
│
├── airetech_ai/                     # Projet Django principal
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   ├── wsgi.py
│   └── asgi.py
│
├── apps/
│   ├── iot/                         # Communication avec stations électroniques
│   │   ├── __init__.py
│   │   ├── models.py
│   │   ├── views.py
│   │   ├── signals.py
│   │   ├── mqtt_handler.py
│   │   └── urls.py
│   │
│   ├── preprocessing/               # Nettoyage & agrégation des données
│   │   ├── __init__.py
│   │   ├── pipeline.py
│   │   ├── aggregators.py
│   │   └── utils.py
│   │
│   ├── ai/                          # IA TensorFlow / PyTorch
│   │   ├── __init__.py
│   │   ├── models/
│   │   │   ├── savedmodel/
│   │   │   └── versioning.json
│   │   ├── predictor.py
│   │   ├── trainer.py
│   │   ├── explainability.py
│   │   └── urls.py
│   │
│   ├── api/                         # API Django REST pour l’IA
│   │   ├── __init__.py
│   │   ├── serializers.py
│   │   ├── views.py
│   │   ├── urls.py
│   │   └── permissions.py
│
│   └── monitoring/                  # Logs, métriques, état des modèles
│       ├── __init__.py
│       ├── model_metrics.py
│       ├── dashboards.py
│       └── alerts.py
│
├── scripts/
│   ├── run_mqtt_listener.py
│   ├── retrain_model.py
│   └── sync_stations.py
│
└── docker/
    ├── Dockerfile
    └── docker-compose.dev.yml
```

## backend Node.js(Express)

```
backend-node/
├── package.json
├── tsconfig.json
├── nodemon.json
├── .env
├── .gitignore
│
├── src/
│   ├── app.ts
│   ├── server.ts
│   │
│   ├── config/
│   │   ├── database.ts
│   │   ├── env.ts
│   │   └── logger.ts
│   │
│   ├── routes/
│   │   ├── index.ts
│   │   ├── auth.routes.ts
│   │   ├── users.routes.ts
│   │   ├── stations.routes.ts
│   │   ├── predictions.routes.ts
│   │   └── routing.routes.ts
│   │
│   ├── controllers/
│   │   ├── auth.controller.ts
│   │   ├── users.controller.ts
│   │   ├── stations.controller.ts
│   │   ├── predictions.controller.ts
│   │   └── routing.controller.ts
│   │
│   ├── services/
│   │   ├── auth.service.ts
│   │   ├── user.service.ts
│   │   ├── station.service.ts
│   │   ├── prediction.service.ts
│   │   └── routeplanner.service.ts
│   │
│   ├── models/
│   │   ├── User.ts
│   │   ├── Station.ts
│   │   ├── Reading.ts
│   │   └── Prediction.ts
│   │
│   ├── middleware/
│   │   ├── auth.middleware.ts
│   │   ├── error.middleware.ts
│   │   └── validate.middleware.ts
│   │
│   ├── utils/
│   │   ├── constants.ts
│   │   ├── helpers.ts
│   │   └── response.ts
│   │
│   └── tests/
│       ├── auth.test.ts
│       ├── users.test.ts
│       └── stations.test.ts
│
└── docker/
    ├── Dockerfile
    └── docker-compose.dev.yml


```
