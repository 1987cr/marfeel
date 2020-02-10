// src/config-context.js
import React from "react";
import api from "api";
import logo from "assets/logo.svg";
import { black, white } from "styles/colors";

export const defaultConfig = {
  header: {
    background: white
  },
  logo: {
    url: logo,
    width: 147,
    height: 36
  },
  burger: {
    color: black
  },
  section: {
    color: black,
    size: 14
  },
  tabs: {
    home: "Home",
    politics: "Politics",
    sports: "Sports",
    national: "National",
    technology: "Tech"
  }
};

export const mergeConfig = (defaultConfig, config) =>
  Object.keys(defaultConfig).reduce(
    (prev, key) => ({
      ...prev,
      [key]: {
        ...defaultConfig[key],
        ...(config[key] || {})
      }
    }),
    {}
  );

const ConfigContext = React.createContext();

export const ConfigProvider = ({ children }) => {
  const [config, setConfig] = React.useState(null);

  React.useEffect(() => {
    const fetchConfig = async () => {
      try {
        const config = await api.fetchConfig();
        setConfig(mergeConfig(defaultConfig, config));
      } catch (error) {
        setConfig(defaultConfig);
      }
    };

    fetchConfig();
  }, []);

  return (
    <ConfigContext.Provider value={config}>
      {config ? children : null}
    </ConfigContext.Provider>
  );
};

const useConfig = () => {
  const context = React.useContext(ConfigContext);
  if (context === undefined) {
    throw new Error("useConfig must be used within a ConfigProvider");
  }
  return context;
};

export default useConfig;
