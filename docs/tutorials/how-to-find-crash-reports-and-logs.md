# How to Find Crash Reports and Logs
Crash reports and logs are text files that record information about the state of the game while it is running.
They are useful for reviewing what happened in previous game sessions (e.g. reviewing old chat messages) or tracing the steps that led up to a game crash.

## Opening the Game Folder
The game folder, also known as the `.minecraft` folder, is the place where all of Minecraft's settings, logs, and mods are located. The steps below describe how to locate and open this folder.

1. Open the Minecraft Launcher
2. Select "Minecraft: Java Edition" from the column on the left if it's not already selected
3. Click the "Installations" tab on the top
   ![A screenshot of the Minecraft Launcher Java Edition home page with a red arrow pointing towards the "Installations" tab on the top|thumb|Minecraft Java Edition home page with an arrow pointing at the "Installations" tab](img/Minecraft%20Launcher%20Java%20Edition%20Home.png)
4. Hover over your Forge installation and click the folder icon to open your game folder
   ![A screenshot of the Minecraft Launcher Installations tab with an installation named "forge" highlighted and an arrow pointing to the folder icon to the right of the installation name](img/Minecraft%20Launcher%20Java%20Edition%20Installations%20Tab.png)
5. Go to the folder named `crash-reports` in the game folder. The crash reports are located inside it.
6. Look at the "Date Modified" column beside the file names and find the crash report file that corresponds to the date and time the crash happened.

## Locating Crash Reports
Crash reports are text files that contain details about what the game was doing when it crashed.
If you encounter a crash while using mods and ask the mod developer for help, the crash report is one of the first things they will ask for.

1. Go to the folder named `crash-reports` in the game folder. The crash reports are located inside it.
2. Look at the "Date Modified" column beside the file names and find the crash report file that corresponds to the date and time the crash happened.

## Locating JVM Crash Reports
!!! warning
    Be careful when sharing JVM crash reports. They contain your Minecraft access token, which can be used by others to log in to your account.

JVM crash reports are a different kind of crash report that is generated when the Java Runtime Environment, the program Minecraft runs on top of, crashes.
If the exit code shown on the Minecraft Launcher's game crash notification is not 1 or -1, it is likely that one of these was generated.

1. Go to the game folder.
2. Look for files with names starting with `hs_err_pid` followed by a number (e.g. `hs_err_pid12345.log`).
3. Look at the "Date Modified" column beside the file names and find the log file that corresponds to the date and time the issue happened.

## Locating Logs
!!! warning
    Be careful when sharing logs. They contain chat messages, which may contain sensitive information.

Logs are text files that record information about events that happen while the game is running, such as chat messages. They may be required to diagnose issues where the game does not crash.

1. Go to the folder named `logs` in the game folder. The logs are located inside it.
2. Look at the "Date Modified" column beside the file names and find the log file that corresponds to the date and time the issue happened.
