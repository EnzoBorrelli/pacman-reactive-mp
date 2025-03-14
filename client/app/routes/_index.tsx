import type { MetaFunction } from "@remix-run/node";
import { useSelector } from "react-redux";
import { Scenes } from "~/components/enums/scene";
import SceneDisplay from "~/components/sceneDisplay";
import ClickBtn from "~/components/utils/clickBtn";
import { RootState } from "~/store";

export const meta: MetaFunction = () => {
  return [
    { title: "Pacman Reactive Multiplayer" },
    { name: "description", content: "Welcome to pacman reactive multiplayer" },
  ];
};

export default function Index() {
  const scene = useSelector((state: RootState) => state.scene);
  return (
    <main className="flex flex-col items-center w-full p-4 bg-slate-950 h-dvh">
      <h3 className="mb-4 font-bold tracking-wider text-center text-md text-slate-300">
        TOP SCORE: 0
      </h3>
      <button
        onClick={() => ClickBtn({scene: Scenes.mapSelector, soundData: {folder: "ui", audio: "menu"}})}
        className={`${
          scene.scene === Scenes.mainMenu ? "hidden" : "flex"
        } text-slate-300 bg-slate-800 ring-2 ring-slate-500 px-2 py-1 rounded-md`}
      >
        Main Menu
      </button>
      <SceneDisplay />
    </main>
  );
}
