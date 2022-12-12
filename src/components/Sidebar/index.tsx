import React from "react";
import "./styles.css";
import "../Content/auth.ts";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_company-symbolics">
        <p>Xsolla Login</p>
      </div>
      <div className="sidebar_settings">
        <p>Selectors</p>
        <select id="select_auth">
          <option value="default">--выберите--</option>
          <option value="auth">Вход/регистрация</option>
          <option value="social_auth">Вход через социальные сети</option>
        </select>
      </div>
    </div>
  );
};

export default Sidebar;
