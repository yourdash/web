import { j as jsxRuntimeExports, U as UKImage, a as UKHeading, b as UKBox, c as clippy, d as UKFlex, e as compilerRuntimeExports, u as useNavigate, f as UKIconButton, g as UKIcons, h as UKSeparator, i as UKPageHeader, k as UKText, R as Routes, l as Route } from "./index-CkkUjQUU.js";
const component$1 = "_component_1kaw9_6";
const styles$1 = {
  component: component$1
};
const UKNavbarNavImage = ({ src }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    UKImage,
    {
      accessibleLabel: "",
      src,
      className: styles$1.component
    }
  );
};
const UKNavbarNavTitle = ({ title }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    UKHeading,
    {
      text: title,
      level: 2
    }
  );
};
const component = "_component_yv1j4_6";
const segment = "_segment_yv1j4_20";
const styles = {
  component,
  segment
};
const UKNavBar = ({ leftSection, centerSection, rightSection, className }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(UKBox, { className: clippy(styles.component, className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      UKFlex,
      {
        className: styles.segment,
        direction: "row",
        children: leftSection
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      UKFlex,
      {
        className: styles.segment,
        direction: "row",
        children: centerSection
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      UKFlex,
      {
        className: styles.segment,
        direction: "row",
        children: rightSection
      }
    )
  ] });
};
const ProjectUiKitIndexPage = () => {
  const $ = compilerRuntimeExports.c(11);
  const navigate = useNavigate();
  let t0;
  if ($[0] !== navigate) {
    t0 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKIconButton, { accessibleLabel: "Go Back to YourDash", icon: UKIcons.YourDashLogo, preserveColor: true, onClick: () => {
      navigate("/");
    } });
    $[0] = navigate;
    $[1] = t0;
  } else {
    t0 = $[1];
  }
  let t1;
  let t2;
  let t3;
  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKSeparator, { direction: "row" });
    t2 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKNavbarNavImage, { src: "/assets/productLogos/yourdash.svg" });
    t3 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKNavbarNavTitle, { title: "UIKit" });
    $[2] = t1;
    $[3] = t2;
    $[4] = t3;
  } else {
    t1 = $[2];
    t2 = $[3];
    t3 = $[4];
  }
  let t4;
  if ($[5] !== t0) {
    t4 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKNavBar, { leftSection: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      t0,
      t1,
      t2,
      t3
    ] }) });
    $[5] = t0;
    $[6] = t4;
  } else {
    t4 = $[6];
  }
  let t5;
  if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = /* @__PURE__ */ jsxRuntimeExports.jsx(UKPageHeader, { heading: "UIKit" });
    $[7] = t5;
  } else {
    t5 = $[7];
  }
  let t6;
  if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
    t6 = /* @__PURE__ */ jsxRuntimeExports.jsxs(UKFlex, { direction: "column", padding: true, centerHorizontally: true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(UKHeading, { level: 2, text: "What is UIKit?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(UKText, { text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab at culpa explicabo fugit hic inventore iusto minima, temporibus ut vero." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(UKHeading, { level: 2, text: "What is UIKit?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(UKText, { text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab at culpa explicabo fugit hic inventore iusto minima, temporibus ut vero." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(UKHeading, { level: 2, text: "What is UIKit?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(UKText, { text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab at culpa explicabo fugit hic inventore iusto minima, temporibus ut vero." })
    ] });
    $[8] = t6;
  } else {
    t6 = $[8];
  }
  let t7;
  if ($[9] !== t4) {
    t7 = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      t4,
      t5,
      t6
    ] });
    $[9] = t4;
    $[10] = t7;
  } else {
    t7 = $[10];
  }
  return t7;
};
const DocsRouter = () => /* @__PURE__ */ jsxRuntimeExports.jsx(Routes, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "uikit", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { index: true, element: /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectUiKitIndexPage, {}) }) }) });
export {
  DocsRouter as default
};
//# sourceMappingURL=ProjectsRouter-UyQ9RieV.js.map
