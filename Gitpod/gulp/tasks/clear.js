// импорт плагина del
import { deleteAsync as del } from "del";

// очищает папку dist (в gulp file -> dev вставляем это таск самым первым , перед копированием);
export const clear = () => {
  return del([app.path.clean, app.path.cleanHtml, app.path.versionJson]);
};
