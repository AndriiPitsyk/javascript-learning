/*
Exercise 1:
Based on Section 15 exercise with class Vehicle & Car you need to split each class in separate file and practise with import/export.

What you should do in the task:
 Move class Vehicle to separate file with correct naming.
 Move class Car to separate file with correct naming. Import class Vehicle to perform inheritance for class Car.
 In file where class Car is implemented export new instance of class with already defined values
 ( Not class should be imported, instance of class)
<your code is here> const car = new Car('Test', 20, 'Electric');
 In new file please call two methods showInfo and signal from instance of class Car.
 */
import {car} from './Car.js';

car.showInfo();
car.signal();