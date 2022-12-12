import { Widget } from "@xsolla/login-sdk";

interface AUTH_ID {
  MYAUTHID: string;
  MYAUTHIDSOCIAL: string;
}
const AUTH: AUTH_ID = {
  MYAUTHID: "61a8f1fa-8eb8-44bc-89d2-2dd87e47fdbd",
  MYAUTHIDSOCIAL: "edf0b6a0-bdb9-4e81-9a78-8ea4395a731b",
};

function createWidget(authId: string) {
  const xl: Widget = new Widget({
    projectId: authId,
    preferredLocale: "ru_RU",
  });
  openWidget(xl);
}
function openWidget(xl: Widget) {
  xl.mount("xl_auth");
  const myDiv: HTMLDivElement | null = document.querySelector("#xl_auth");
  if (myDiv) {
    myDiv.style.display = "block";
  }
  xl.open();
}

function prepareWidget(selectorAuth: HTMLSelectElement, widgetId: string) {
  createWidget(widgetId);
  selectorAuth.value = "default";
}

function openAuth() {
  const selectorAuth: HTMLSelectElement | null =
    document.querySelector("#select_auth");
  selectorAuth?.addEventListener("change", () => {
    const isSocialOption =
      selectorAuth.value === "social_auth"
        ? prepareWidget(selectorAuth, AUTH.MYAUTHIDSOCIAL)
        : prepareWidget(selectorAuth, AUTH.MYAUTHID);
  });
}
window.onload = openAuth;
