

## 14-02-2017
My internship will start tomorrow. Today I spend time on setting this blog up.

## 15-02-2017
Day 1: Due to a medical circumstances, Mayan Death Robots' Xbox Release was postponed for a few weeks. The focus is still to get bugs removed from the xbox build, and to make sure it's confirm to requirements to release on the xbox store. Today i started with checking some of those requirements and playtesting in search for bugs. After that i reviewed the different media channels in search for more errors or outdated content. And playtested some more.

## 16-02-2017
Day 2: I continued playtesting MDR, this time more focussed on performance issues. We thoughed together on which way is best to resolve framedrops in certain levels. and we started playtesting multiplayer. We also talked about which prroject would be best to workk on after GDC.

## 17-02-2017
Day 3: We continued to playtest and found some more minor bugs and resolved for what was worth. these were final things to change before submitting MDR for certification. I also brainstormed a bit for marketting idea's

## 20-02-2017
Day 4: Today there was little to do for me, I explored MDR's codebase, out of interrest and worked a bit on a personal project. Tomorrow we will start something new. 

## 21-02-2017
Day 5: the plan is to build every week a new game and focus each time on 1 or 2 technical aspects which we engineer indepth. We started brainstorming new ideas for technical aspects and search for 2 that would work together. wo chose modular building, and inventories, and started developing arround that, on a modular mech game.

## 22-02-2017
Day 6: I continued working: I made the system to store the modular systems yesterday, and worked on the editor today. Karel worked on the inventory system.

## 23-02-2017
Day 7: We continued working and finished an early proof of concept. you can drive arround on tracks and pickup scrap modules. You can enter edit mech mode to add them to your mech and create crazy shapes and forms.  and resume driving arround while trying to not get out of balance. the heavier your mech, the higher your score. https://twitter.com/SileniStudios/status/834803497820422144

## 13-03-2017
Day 8: During the last 2 weeks, Karel went to to GDC and has been thinkimg about new game concepts. and has formed an idea on which direction he wants to go next. The idea involves a map generator and he stumbled upon the fact that there doesn't exist a noise editor asset for Unity. So past week he started making one, which isn't finished yet. I will continue on improving it.

## 14-03-2017
Day 9: I continued working on the noise editor: added multithreading to rendering, improved hownseeds worked, and fixed interactionbugs. In the afternoon we veryfied the quality of the localisation of Mayan Death Robots and  playtested, which resulted in barely any bugs. Quite ready for launch.

## 15-03-2017
Day 10: I continued to work on the noise editor. made save and load, made small previews of nodeswhich keep live up-to-date. and discussed gamedesign 

## 16-03-2017
Day 11: We playtested some more Mayan Death Robots, and found a few new bugs, in the afternoon I worked on the noise editor and added color scale functionality

## 17-03-2017
Day 12:I  worked some more on the noise editor and we discussed gamedesign of the game.

## 20-03-2017
Day 13: I added controls for the curve editor and fix some issues

## 21-03-2017
Day 14: I studied the other code by Karel and implemented a turn/round system into the gamr. At the end of the day I did some indisign work for folders for EGX Rezzed next week.

## 27-03-2017
Day 15: I made tiles just flip when you approach them and refacfored movement. I also rreworked visuals, and added UIinfo widgets for every player.

## 28-03-2017
Day 16: I refactored code today. Tomorrow karel will leave to EGX to exhibit Mayan Death Robots. We will continue the 10th of April.

## 10-04-2017
Day 17: Xbox requested an update of the xdk for mayan death robots which also required a small update in unityversion. So today we play tested a lot, an found several major bugs. 

## 11-04-2017
Day 18: After a bit more testing, we decided to submit MDR again for verification. We brainstormed about a new gameidea to explore, and decided on a mobile game where you smash chests with swords, hoping to get a better sword out of the chest..

## 12-04-2017
Day 19: I focused on making a good sword animation that reacts well on the gyroscope. for this i abstracted and smoothed the gyro input and used this as input for calculating nice sword slashes.

## 13-04-2017
Day 20: I rearanged the screen layout and reworked how the animation code works in a more clean and extendable manner

## 14-04-2017
Day 21: Finished the animation code, and started implementing a generic reusable system to scroll trough objects, one at a time.

## 18-04-2017
Day 22: I continued working on the scroll code a bit and we discussed further game design a lot.

## 19-04-2017
Day 23: I added the touch input codebase and integrated  the scroll into it.

## 20-04-2017
Day 24: I implemented chest animations and cleaned a lot of legacy code. redid some animations and had a pretty well working build. we did some thinkimg on how to make the gameplay more interestimg and made a plan.

## 21-04-2017
Day 25: I worked on particlesystems and other visual impovements. We finished the prototype to a working and fun thing.

## 02-05-2017
Day 26: We started working on a new gameidea: a game where you controll snakes by playing notes on a flute. I made some sound visualisation to display the different notes in unity.

## 03-05-2017
Day 27: while karel continues to refine the notes for the snakecharmer game. i playtest MDR on some basic things since it's now available on the xbox store, outside the development sandbox, after that i started working on the gameplay for snake-charmer. made a snake and experimented with different ways of moving, searching to what most resambles the movement of a snake.

## 04-05-2017
Day 28: Today i added a hexgrid level system, and added pathfinding to the snake to dodge obstacles. after that I started working on a level editor

## 05-05-2017
Day 29: I continued on the leveleditor: made everything accessable in ui. etc.

## 08-05-2017
Day 30: We retoughed how the code is structured regarding what is running in editor/ingame.

## 09-05-2017
Day 31: added an inspect tile feature to level editor. we decided to move the level editor ingame. and i added height to the world tiles and started working on a way to edit this.

## 10-05-2017
Day 32: changed the level to work in 3d instead of orthpgraphic topdown. made a brush to paint the level. and finished the heightmap stuff.

## 11-05-2017
Day 33: i fixed some smaller lacking stuff in the editor and begun working on procedurally generated flower meshes.

## 12-05-2017
Day 34: i fixed ton of issues with the flowermesh and added genered uv's and normals.

## 15-05-2017
Day 35: I made the flowers work in the world and made them animatable with code that we wrote for ultimate supersword.

## 16-05-2017
Day 36: I improved flower animations and fixed quitr some bugs.

## 17-05-2017
Day 37: I added grass to the world, separated animation from notetotem and fixed more bugs.

## 18-05-2017
Day 38: I implemented dependency injection on the entity engine.

## 19-05-2017
Day 39: I added global deformation to the world.

## 22-05-2017
Day 40: we retought gameplay, and switched to making somesort puzzlegame. I remade the way input is given and tried some levellayouts for puzzles, and added some mechanics.

## 23-05-2017
Day 41: today walter came by to evaluate, and I worked on some puzzle designs and added a new puzzle mechanic.

## 24-05-2017
Day 42: I revamped the movement and restructured the levels into worlds. also made few more levels.

## 26-05-2017
Day 43: added drag controlls to the snake, which now works waay more intuitive and fixed minor issues & started on path renderer.

## 29-05-2017
Day 44: polished the pathrenderer and let friend playtest.

## 30-05-2017
Day 45: added more levels, fixed more minor issues 

## 31-05-2017
Day 46: added theming to the worlds, recurted levels, & more preparations for showing at IGS tonight.

## 01-06-2017
Day 47: fixed stuff based on feedback of IGS, revamped tilevisuals, made camerapositioning work well.

## 02-06-2017
Day 48: I worked on the pathindication arrow's visuals. Added an outline mesh, fixed several smaller bugs.

## 06-06-2017
Day 50: i continued porting the game to mobile: made menu's, fixed shaders, ranged rendering method  .

## 07-06-2017
Day 51: I made the levels load assynchonous, and added animations to switch levels. and been fixing a lot of bugs arround this.

## 08-06-2017
Day 52: I fixed more bugs with the new loading and optimised speed.

## 09-06-2017
Day 53: I worked on making the snakes look more different from eachother by adding fins to the biggest ect..

## 11-06-2017
Day 54: i went deep into the profiler to chip away as much delays as possible by caching.

## 12-06-2017
Day 55: I wrapped op some load optimisations and bugfixes, and added a hub level, and placeholder planet selection menu.