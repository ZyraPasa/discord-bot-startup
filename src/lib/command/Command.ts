import { ICommand, IOptions } from "./CommandInterface";

export class Command implements ICommand {
  name: string;
  useage: string;
  options?: IOptions;
  constructor(name: string, useage: string, options?: IOptions) {
    this.name = name;
    this.useage = useage;
    options ? (this.options = options) : {};
  }
}
