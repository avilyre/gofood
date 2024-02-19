import { Fragment } from "react";
import { Helmet } from "react-helmet-async";

export function Dashboard() {
  return (
    <Fragment>
      <Helmet title="Dashboard" />
      <h1>Dashboard</h1>
    </Fragment>
  );
}
