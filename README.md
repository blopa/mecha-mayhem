# MechaMayhem

**Your Mech has malfunctioned!!!**

**Regain control by enabling the terminals to unleash its power.**

---

[![Trailer](https://img.youtube.com/vi/Jz-3jMS3WbI/hqdefault.jpg)](https://www.youtube.com/watch?v=Jz-3jMS3WbI)

### About
This game was made during the GMTK Jam 2020, from 07/10/2020 to 07/12/2020. You can see the official submission page [here](https://itch.io/jam/gmtk-2020/rate/696581), the jam version is [0.0.1-alpha.4](https://github.com/blopa/mecha-mayhem/releases/tag/0.0.1-alpha.4).

Play it now on [itch.io](https://shamps.itch.io/mechamayhem) or [Github Pages](https://blopa.github.io/mecha-mayhem/) (latest build).

Brought to you by:
- Sound/Music by [@themajorbruno](https://instagram.com/themajorbruno)
- Trailer/Gifs by [@mattstracktv](https://instagram.com/mattstracktv)
- Arts by [@8bitalo](https://instagram.com/8bitalo)
- Code by [@shamps](https://shamps.itch.io/) and [@blopa](https://github.com/blopa)

### Controls
*   WASD or Arrow Keys to Move
*   Press P for helpful tips

Turn the crank to destroy UFOs!

Mash the button to topple buildings!

Enter the code to stop the bombs!

### Description
In **MechaMayhem**, you play as an incredibly smart scientist. Some would say the smartest - except Mrs. Danewood - she never called you smart. 

After she flunked you out of fifth grade for creating a self-propelled robot instead of a potato-powered clock, you spend your next 20 years developing a Mech that supersedes any grading scale…

 On the day of (now Mayor) Danewood's reckoning, you, inside your Mech, are poised to take back the city from the corrupt Mayor. You with your lasers, and Mayor Danewood with her politically-gained Pterodactyl bombs, are poised for the ultimate showdown.

_ALAS! _At the penultimate hour, disaster strikes! Your Mech has malfunctioned, forcing you to manually enact the necessary processes to ensure mayor Danewood's ultimate destruction.

Can you quickly regain control of your robotic-creation? Or will Mayor Danewood flunk you one last time...

### Technology

This project uses Phaser 3 + Webpack 4 + ES6 + ESlint + Cordova
Of course this was only possible because of some amazing free/open source softwares available today. So I'd like to say a special thank you to:
- [lean/phaser-es6-webpack](https://github.com/lean/phaser-es6-webpack) and [ReydVires/phaser3-cordova](https://github.com/ReydVires/phaser3-cordova) for the base of this project
- [npm](https://github.com/npm/cli) for javascript packager managing
- [eslint](https://github.com/eslint/eslint) for code linter
- [Phaser](https://github.com/photonstorm/phaser) for the game engine
- [Webpack](https://github.com/webpack/webpack) to build and run the Javascript environment
- [cordova](https://github.com/apache/cordova) for packing the Android APK file
- [Android Studio](https://android.googlesource.com/platform/tools/base/+/studio-master-dev/studio.md) to sign the APK file

### Deployment
Run `npm run build-mobile` to build the game and the APK file at `platforms\android\app\build\outputs\apk\release`, then sign it. Done.
To build the Phaser game only, run `npm run build`
