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
                        },
                        "new-role": {
                            "table": "sys_user_role",
                            "id": "2b20f96e852a4cdf8050258b229e3135"
                        },
                        "new-acl": {
                            "table": "sys_security_acl",
                            "id": "dc63d36fe43a441c81624e4e0df52a13"
                        }
                    };
                composite: [
                        {
                            "table": "sys_security_acl_role",
                            "id": "a63df8411a754734bbe9b660e2006c37",
                            "key": {
                                "sys_security_acl": "new-acl",
                                "sys_user_role": "x_acar_gsapp.new_role"
                            }
                        }
                    ];
            }
        }
    }
}
