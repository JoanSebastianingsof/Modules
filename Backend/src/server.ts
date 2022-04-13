import app from "./app"
const server = app.listen(app.get("port"), ()=>{
    console.log("start sever");
});
export default app;