import { useEffect, useRef } from "react";
import Phaser from "phaser";
import UIScene from "../scenes/UIScene";
import BootScene from "../scenes/BootScene";
import MainMenuScene from "../scenes/MainMenuScene";
import SemesterSelectScene from "../scenes/SemesterSelectScene";
import AcademyExterior from "../scenes/AcademyExterior";
import AcademyInterior from "../scenes/AcademyInterior";
import Classroom1 from "../scenes/Classroom1";
import BinaryPuzzle from "../scenes/BinaryPuzzle";
import Quiz1 from "../scenes/Quiz1";
import Lesson1Complete from "../scenes/Lesson1Complete";
import Classroom2 from "../scenes/Classroom2";
import LogicGatePuzzle from "../scenes/LogicGatePuzzle";
import Quiz2 from "../scenes/Quiz2";
import Lesson2Complete from "../scenes/Lesson2Complete";
import Classroom3 from "../scenes/Classroom3";
import SuperpositionPuzzle from "../scenes/SuperpositionPuzzle";
import Quiz3 from "../scenes/Quiz3";
import Lesson3Complete from "../scenes/Lesson3Complete";
import Classroom4 from "../scenes/Classroom4";
import EntanglementPuzzle from "../scenes/EntanglementPuzzle";
import Quiz4 from "../scenes/Quiz4";
import Lesson4Complete from "../scenes/Lesson4Complete";
import Classroom5 from "../scenes/Classroom5";
import MeasurementPuzzle from "../scenes/MeasurementPuzzle";
import Quiz5 from "../scenes/Quiz5";
import Lesson5Complete from "../scenes/Lesson5Complete";
import Classroom6 from "../scenes/Classroom6";
import QuantumGatePuzzle from "../scenes/QuantumGatePuzzle";
import Quiz6 from "../scenes/Quiz6";
import Semester1Complete from "../scenes/Semester1Complete";
import Semester1Exam from "../scenes/Semester1Exam";
import Classroom7 from "../scenes/Classroom7";
import HadamardPuzzle from "../scenes/HadamardPuzzle";
import Quiz7 from "../scenes/Quiz7";
import Lesson7Complete from "../scenes/Lesson7Complete";
import Classroom8 from "../scenes/Classroom8";
import QuantumCircuitPuzzle from "../scenes/QuantumCircuitPuzzle";
import Quiz8 from "../scenes/Quiz8";
import Lesson8Complete from "../scenes/Lesson8Complete";
import Classroom9 from "../scenes/Classroom9";
import QuantumTeleportationPuzzle from "../scenes/QuantumTeleportationPuzzle";
import Quiz9 from "../scenes/Quiz9";
import Lesson9Complete from "../scenes/Lesson9Complete";
import Classroom10 from "../scenes/Classroom10";
import QuantumErrorCorrectionPuzzle from "../scenes/QuantumErrorCorrectionPuzzle";
import Quiz10 from "../scenes/Quiz10";
import Lesson10Complete from "../scenes/Lesson10Complete";
import Classroom11 from "../scenes/Classroom11";
import QuantumCryptographyPuzzle from "../scenes/QuantumCryptographyPuzzle";
import Quiz11 from "../scenes/Quiz11";
import Lesson11Complete from "../scenes/Lesson11Complete";
import Classroom12 from "../scenes/Classroom12";
import BlochSpherePuzzle from "../scenes/BlochSpherePuzzle";
import Quiz12 from "../scenes/Quiz12";
import Lesson12Complete from "../scenes/Lesson12Complete";
import Semester2Exam from "../scenes/Semester2Exam";
import Semester2Complete from "../scenes/Semester2Complete";
import Classroom13 from "../scenes/Classroom13";
import QuantumUpgradePuzzle from "../scenes/QuantumUpgradePuzzle";
import Quiz13 from "../scenes/Quiz13";
import Lesson13Complete from "../scenes/Lesson13Complete";
import Classroom14 from "../scenes/Classroom14";
import PostQuantumMigrationPuzzle from "../scenes/PostQuantumMigrationPuzzle";
import Quiz14 from "../scenes/Quiz14";
import Lesson14Complete from "../scenes/Lesson14Complete";
import Classroom15 from "../scenes/Classroom15";
import LatticePuzzle from "../scenes/LatticePuzzle";
import Quiz15 from "../scenes/Quiz15";
import Lesson15Complete from "../scenes/Lesson15Complete";
import Classroom16 from "../scenes/Classroom16";
import FutureQuantumPuzzle from "../scenes/FutureQuantumPuzzle";
import Quiz16 from "../scenes/Quiz16";
import Lesson16Complete from "../scenes/Lesson16Complete";
import Semester3Exam from "../scenes/Semester3Exam";
import GraduationScene from "../scenes/GraduationScene";
import CreditsScene from "../scenes/CreditsScene";
import SettingsScene from "../scenes/SettingsScene";
console.log("SettingsScene imported:", SettingsScene);
console.log(SemesterSelectScene);

export default function Game() {

  const gameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gameRef.current) return;

    const game = new Phaser.Game({
      type: Phaser.AUTO,

      parent: gameRef.current,

      backgroundColor: "#2b1055",

      scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1280,
        height: 720,
      },

      scene: [
        BootScene,
        MainMenuScene,
        SemesterSelectScene,
        AcademyExterior,
        AcademyInterior,
        UIScene,
        Classroom1,
        BinaryPuzzle,
        Quiz1,
        Lesson1Complete,
        Classroom2,
        LogicGatePuzzle,
        Quiz2,
        Lesson2Complete,
        Classroom3,
        SuperpositionPuzzle,
        Quiz3,
        Lesson3Complete,
        Classroom4,
        EntanglementPuzzle,
        Quiz4,
        Lesson4Complete,
        Classroom5,
        MeasurementPuzzle,
        Quiz5,
        Lesson5Complete,
        Classroom6,
        QuantumGatePuzzle,
        Quiz6,
        Semester1Complete,
        Semester1Exam,
        Classroom7,
        HadamardPuzzle,
        Quiz7,
        Lesson7Complete,
        Classroom8,
        QuantumCircuitPuzzle,
        Quiz8,
        Lesson8Complete,
        Classroom9,
        QuantumTeleportationPuzzle,
        Quiz9,
        Lesson9Complete,
        Classroom10,
        QuantumErrorCorrectionPuzzle,
        Quiz10,
        Lesson10Complete,
        Classroom11,
        QuantumCryptographyPuzzle,
        Quiz11,
        Lesson11Complete,
        Classroom12,
        BlochSpherePuzzle,
        Quiz12,
        Lesson12Complete,
        Semester2Exam,
        Semester2Complete,
        Classroom13,
        QuantumUpgradePuzzle,
        Quiz13,
        Lesson13Complete,
        Classroom14,
        PostQuantumMigrationPuzzle,
        Quiz14,
        Lesson14Complete,
        Classroom15,
        LatticePuzzle,
        Quiz15,
        Lesson15Complete,
        Classroom16,
        FutureQuantumPuzzle,
        Quiz16,
        Lesson16Complete,

        Semester3Exam,
        GraduationScene,
        CreditsScene,

        
        SettingsScene,

      ],

      physics: {
        default: "arcade",
        arcade: {
          debug: false,
        },
      },
    });

    return () => {
      game.destroy(true);
    };
  }, []);

  return <div ref={gameRef}></div>;
}