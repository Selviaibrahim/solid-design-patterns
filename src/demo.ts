import { Logger } from "./patterns/LoggerSingleton.js";
import { LightTheme, DarkTheme, ThemeSwitcher } from "./patterns/ThemeStrategy.js";
import { NotificationService, User } from "./patterns/NotificationObserver.js";
import { ShapeFactory } from "./patterns/ShapeFactory.js";

//Singleton 
const logger = Logger.getInstance();
logger.log("App starting");

// Strategy 
const themeSwitcher = new ThemeSwitcher(new LightTheme());
themeSwitcher.applyTheme();           
themeSwitcher.setTheme(new DarkTheme());
themeSwitcher.applyTheme();            

//Observer 
const notifier = new NotificationService();
const alice = new User("Alice");
const bob = new User("Bob");
notifier.subscribe(alice);
notifier.subscribe(bob);
notifier.notify("New update available!");

//Factory example 
const circle = ShapeFactory.createShape("circle");
const square = ShapeFactory.createShape("square");
circle.draw();
square.draw();

logger.log("App finished");
