export type IOptions = {
  onlyArgs?: boolean;
  maxArgs?: number;
};

export interface ICommand {
  name: string;
  useage: string;
  options?: IOptions;
  // process: () => void;
}
