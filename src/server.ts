console.log("welcome to catalog service");
import { Config } from "./config/index";

function Hello(name: string) {
  console.log(`hello ${name} on Port ${Config.PORT}`);
}

Hello("parvej");
