function func1() {
    function clock() {
        const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        const date = new Date();
        const weekDay = date.getDay();
        const hours = date.getHours();
        const hour = hours > 12 ? hours - 12 + ' pm' : hours + ' am';
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        console.log('Today is:', weekDays[weekDay - 1]);
        console.log('Current time is:', hour, ':', minutes, ':', seconds);
    }
    clock();
    setInterval(clock, 1000);
}

function func2() {
    window.print();
}

function func3() {
    const side1 = 5;
    const side2 = 6;
    const side3 = 7;
    const s = (side1 + side2 + side3)/2;
    console.log(Math.sqrt(s*((s-side1)*(s-side2)*(s-side3))));
}