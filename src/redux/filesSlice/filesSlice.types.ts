import IResSearch from "@/src/interfaces/IResSearch";

export interface IFilesSlice {
  allFiles: IResSearch[]
  currentFile: IResSearch | null
}
