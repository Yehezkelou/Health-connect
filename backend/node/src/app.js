import Express from "express";
const app = Express();
app.use('/', (req, res) => {
    res.send('Hello world');
});
export default app;
//# sourceMappingURL=app.js.map