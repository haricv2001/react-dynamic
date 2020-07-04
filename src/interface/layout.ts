interface Layout {
  name: string;
  components: {
    [index: string]: { config?: ComponentConfig; data: DataSource };
  };
}

interface Region {}

interface Page {
  layout: Layout;

  region: { [name: string]: ComponentProps[] };
}

/**
 * psuedo-code
 *
 *
 */

const page: Page = {
  layout: {
    name: "default",
    components: {
      topmenu: {
        config: { style: "" },
        data: { type: 0, api: "/test/menu" }
      },
      title: {
        config: { style: "test" },
        data: { type: 1, data: ["test", "t11"] }
      }
    }
  },
  region: {
    leftarea: [
      {
        type: "InfoCard",
        id: "ClientInfoCard",
        config: {
          title: "Client Basic Information",
          mode: "view",
          entity: "fri://entity/Client"
        },
        events: {
          "onDataLoad" :{
            raise: [
              {
                name : "BREADCRUMB_SETTEXT", 
                payload : data.name;
              },
              {
                
              }
            ]
          }
        },
        toolbar: {},
        data: {
          type: 0,
          api: "/test/menu"
        }
      },
      {
        type: "InfoCard",
        id: "DebtCard",
        config: {
          title: "Debt Information",
          mode: "view",
          entity: "fri://entity/Debt"
        },
        events: {
          "onDataLoad" :{
             
          }
        },
        toolbar: {},
        data: {
          type: 0,
          api: "/test/menu"
        }
      }
    ],
    rightarea: []
  }
};

console.log(page.layout.name);
const store =  { "id" : "19910"};

function getApiURl(entityFRI:string){
  const d = entityFRI.replace("fri://entity/","");
  return "http://crm.fdr.com/api/entity/"+ d + "?id="  + store.id;
}