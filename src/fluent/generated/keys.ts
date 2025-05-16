import "@servicenow/sdk/global";

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                        "cs0": {
                            "table": "sys_script_client",
                            "id": "c53440a5c0a046748bc17accfd5769bd"
                        },
                        "src_server_script_ts": {
                            "table": "sys_module",
                            "id": "eee70cfd8eff4662b0491bc140258379"
                        },
                        "br0": {
                            "table": "sys_script",
                            "id": "2d7a8fde751d4fb9bd59eb7f14854499"
                        },
                        "package_json": {
                            "table": "sys_module",
                            "id": "cd6fb5920ed9408685c7212bbb4fb4c7"
                        }
                    };
            }
        }
    }
}
