import "./sass/index.scss";
import * as rx from "rxjs";
import { Observable } from "rxjs";
import { Subject } from "rxjs";
import { BehaviorSubject } from "rxjs";
import { alert } from "./functions/alert";
import { ReplaySubject } from "rxjs";
document.addEventListener("click", () => {
    alert("Good day!");
});

const SubjectX = new Subject();
let observer = SubjectX.subscribe({
    next: (x: string) => {
        console.log(x);
    },
});
SubjectX.next("HAJ!");
SubjectX.next("HAJ2!");
setInterval(() => {
    observer.unsubscribe();
    console.log("unsub");
}, 6001);
setInterval(() => {
    SubjectX.subscribe({
        next: (x: string) => {
            console.log(x);
        },
    });
    console.log("sub");
}, 8000);
setInterval(() => {
    SubjectX.next("XD");
    console.log("nextuje");
}, 2000);

SubjectX.next("XD2");
const rep = new ReplaySubject(2);
rep.next("GRRR");
rep.next("GRRR2");
rep.next("GRRR3");
rep.next("GRRR4");
rep.subscribe({
    next: (e) => {
        console.log(e, "re");
    },
});
