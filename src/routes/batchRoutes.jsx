import BatchInfo from "../containers/BatchInfo/BatchInfo";

const batchRoutes = [
  {
    path: "/batchinfo",
    component: BatchInfo,
    layout: null,
  },
  {
    path: "/batchinfo/:batchCode",
    component: BatchInfo,
    layout: null,
  },
];

export default batchRoutes;
