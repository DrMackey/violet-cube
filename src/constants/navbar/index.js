import { ReactComponent as Doc } from "../../images/navbar-icons/doc.text.svg";
import { ReactComponent as Magnifyingglass } from "../../images/navbar-icons/magnifyingglass.svg";
import { ReactComponent as Play } from "../../images/navbar-icons/play.square.svg";
import { ReactComponent as Rectangle } from "../../images/navbar-icons/rectangle.grid.svg";

export const NAVBAR_TABS = [
  { title: "Сегодня", icon: <Doc /> },
  { title: "Каталог", icon: <Rectangle /> },
  { title: "Медиатека", icon: <Play /> },
  { title: "Поиск", icon: <Magnifyingglass /> },
];
