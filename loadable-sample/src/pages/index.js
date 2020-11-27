import withSplitting from "../withSplitting";

export const Home = withSplitting(() => import("./Home"));
export const About = withSplitting(() => import("./About"));
