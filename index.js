const inform = console.log;

function run() {
  const action = process.argv[2];

  switch (action) {
    case "index":
      inform(action);
      break;
    case "create":
      inform(action);
      break;
    case "show":
      inform(action);
      break;
    case "update":
      inform(action);
      break;
    case "destroy":
      inform(action);
      break;
    case "total":
      inform(action);
      break;
    case "empty":
      inform(action);
      break;
    default:
      inform("There was an error.");
  }
}

run();
