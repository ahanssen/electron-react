import ConfigureStoreDev from "./configureStore.development";
import ConfigureStoreProd from "./configureStore.production";

const store = process.env.NODE_ENV === "production" ? ConfigureStoreProd : ConfigureStoreDev; // eslint-disable-line global-require

const { configureStore, history } = store;

export { configureStore, history };