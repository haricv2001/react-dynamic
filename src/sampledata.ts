export default {
  page: {
    config: {
      layout: {
        name: "default",
        config: {
          topmenu: {
            data: {
              resoure: "fri://entity/menu?name=topmenu",
              store: {
                event: "menu-loaded",
                data: "top_menu",
                transforamtion: { id: "name" }
              },
              static: {
                items: [
                  {
                    title: "menu1",
                    url: "menu1"
                  },
                  {
                    title: "menu2",
                    url: "menu2"
                  }
                ]
              }
            }
          },
          leftmenu: {
            config: {},
            data: {
              resoure: "fri://entity/menu?name=topmenu",
              static: {
                items: [
                  {
                    title: "menu1",
                    url: "menu1"
                  },
                  {
                    title: "menu2",
                    url: "menu2"
                  }
                ]
              }
            }
          },
          breadcrump: {
            config: {},
            data: {
              resoure: "fri://entity/menu?name=topmenu",
              static: {
                tex: "DS Clients > George Jedenoff"
              }
            }
          },
          topinfo: {
            config: {},
            data: {
              static: {
                text: "Last viewed by Amy Garcia on Dec 12 2019"
              }
            }
          },
          toptab: {
            data: {
              static: [
                {
                  title: "All Leads",
                  url: "url1"
                },
                {
                  title: "Debt Leads",
                  url: "url1"
                },
                {
                  title: "Lead Sources",
                  url: "url1"
                }
              ]
            }
          },
          maintoolbar: {
            config: {},
            data: {
              static: [
                {
                  align: "left",
                  component: {
                    type: "button",
                    class: "owner",
                    action: "ACTION"
                  }
                },
                {
                  align: "left",
                  component: {
                    type: "button",
                    class: "new",
                    action: "ACTION"
                  }
                },
                {
                  align: "right",
                  component: {
                    type: "button",
                    class: "test",
                    action: "ACTION"
                  }
                }
              ]
            }
          },
          right: {
            config: {},
            data: {
              resoure: "fri://entity/menu?name=buttonarea",
              static: {
                data: [
                  {
                    type: "button",
                    class: "note",
                    action: "ACTION"
                  },
                  {
                    type: "button",
                    class: "share",
                    action: "ACTION"
                  },
                  {
                    type: "button",
                    class: "more",
                    action: "ACTION"
                  }
                ]
              }
            }
          }
        }
      }
    },
    events: {
      init: { store_event: "LOAD_MENU", transformation: {} }
    },
    title: "My page"
  },
  regions: {
    leftblock: {
      size: 8,
      children: [
        {
          type: "card",
          mode: "view",
          resoure: "fri://entity/menu?name=buttonarea",
          config: {},
          header: {
            config: {
              title: "Client Information"
            },
            children: [
              {
                type: "button",
                class: "add",
                action: "ACTION"
              }
            ]
          },
          body: {
            config: {},
            type: "card"
          }
        },
        {
          type: "card",
          mode: "view",
          resoure: "fri://entity/menu?name=buttonarea",
          config: {},
          header: {
            config: {
              title: "Debts"
            },
            children: [
              {
                type: "button",
                class: "add",
                action: "ACTION"
              }
            ]
          },
          body: {
            config: {},
            type: "grid"
          }
        }
      ]
    },
    rightblock: {
      size: 8,
      children: [
        {
          type: "card",
          mode: "view",
          resoure: "fri://entity/menu?name=buttonarea",
          config: {},
          header: {
            config: {
              title: "Client Information"
            },
            children: [
              {
                type: "button",
                class: "add",
                action: "ACTION"
              }
            ]
          },
          body: {
            config: {},
            type: "card"
          }
        },
        {
          type: "card",
          mode: "view",
          resoure: "fri://entity/menu?name=buttonarea",
          config: {},
          header: {
            config: {
              title: "Debts"
            },
            children: [
              {
                type: "button",
                class: "add",
                action: "ACTION"
              }
            ]
          },
          body: {
            config: {},
            type: "grid"
          }
        }
      ]
    }
  }
};
