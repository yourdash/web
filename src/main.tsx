/*
 * Copyright ©2025 Ewsgit<https://github.com/ewsgit> and YourDash<https://github.com/yourdash> contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import "animate.css";
import "./tailwindcss.css";
import "./main.css";
import UKHeading from "@yourdash/uikit-embedded/src/components/heading/UKHeading.js";
import UIKitRoot from "@yourdash/uikit-embedded/src/core/root.js";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import ApplicationRedirectToDash from "./app/ApplicationRedirectToDash.tsx";
import AppLayout from "./app/AppLayout.tsx";
import LoginIndexPagePreload from "./root/login/index.preload.tsx";
import LoginInstancePage from "./root/login/instance/index.tsx";
import Navigation from "./root/components/navigation/navigation.tsx";
import ErrorElement from "./ErrorElement.tsx";
import Index from "./root/index/Index.tsx";
import LoginRedirect from "./deprecatedLogin/Redirect.tsx";
import SignupPage from "./root/login/signup/index.tsx";
import LoginSuccessPage from "./root/login/success/index.tsx";
import NotFoundPage from "./root/notFound/notFound.tsx";
import ProjectsIndexPage from "./root/projects/Index.tsx";
import LinkerDesktopClientStartupPage from "./root/linkerDesktopClientStartup/Index.tsx";
import WebsocketToasts from "./WebsocketToasts.tsx";
import loadable from "@loadable/component";
import AppRouter from "./app/AppRouter.tsx";

const ProjectsRouter = loadable(() => import("./root/projects/ProjectsRouter.tsx"));

const element = document.getElementById("root") as HTMLElement;

const loadingElement = document.createElement("h1");

loadingElement.style.display = "flex";
loadingElement.style.width = "100%";
loadingElement.style.height = "100%";
loadingElement.style.justifyContent = "center";
loadingElement.style.alignItems = "center";
loadingElement.innerText = "Initializing YourDash...";

element.appendChild(loadingElement);

const root = ReactDOM.createRoot(element);

root.render(
  <UIKitRoot>
    <WebsocketToasts />
    <BrowserRouter>
      <Routes>
        <Route errorElement={<ErrorElement />}>
          <Route
            path={"/linker-desktop-client-startup"}
            element={<LinkerDesktopClientStartupPage />}
          />
          <Route element={<Navigation />}>
            <Route
              index
              element={<Index />}
            />
            <Route
              path={"*"}
              element={<NotFoundPage />}
            />
          </Route>
          <Route element={<Navigation subtitle={"Projects"} />}>
            <Route
              path={"projects"}
              index
              element={<ProjectsIndexPage />}
            />
            <Route element={<ProjectsRouter />} />
          </Route>
          <Route path={"login"}>
            <Route
              index
              element={<LoginIndexPagePreload />}
            />
            <Route
              path={"success"}
              element={<LoginSuccessPage />}
            />
            <Route element={<Navigation subtitle={"Instance"} />}>
              <Route
                path={"signup"}
                element={<SignupPage />}
              />
            </Route>
            <Route
              path={"signup"}
              element={<UKHeading text={"TODO: implement me"}></UKHeading>}
            />
            <Route path={"instance"}>
              <Route
                index
                element={<LoginInstancePage />}
              />
              <Route
                path={"*"}
                element={<LoginRedirect />}
              />
            </Route>
          </Route>
          <Route path={"app"}>
            <Route
              index
              element={<ApplicationRedirectToDash />}
            />
            <Route
              element={<AppLayout />}
              path={"a"}
            >
              <Route
                index
                element={<ApplicationRedirectToDash />}
              />
              {...AppRouter}
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </UIKitRoot>,
);
