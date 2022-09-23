Cmaj = new Array("C","D","E","F","G","A","B");
Amin = new Array("A","B","C","D","E","F","G");

Gmaj = new Array("G","A","B","C","D","E","F#");
Emin = new Array("E","F#","G","A","B","C","D");

Dmaj = new Array("D","E","F#","G","A","B","C#");
Bmin = new Array("B","C#","D","E","F#","G","A");

Amaj = new Array("A","B","C#","D","E","F#","G#");
Fsharp_min = new Array("F#","G#","A","B","C#","D","E");

Emaj = new Array("E","F#","G#","A","B","C#","D#");
Csharp_min = new Array("C#","D#","E","F#","G#","A","B");

Bmaj = new Array("B","C#","D#","E","F#","G#","A#");
Gsharp_min = new Array("G#","A#","B","C#","D#","E","F#");

Fsharp_maj = new Array("F#","G#","A#","B","C#","D#","E#");
Dsharp_min = new Array("D#","E#","F#","G#","A#","B","C#");

Csharp_maj = new Array("C#","D#","E#","F#","G#","A#","B#");
Asharp_min = new Array("A#","B#","C#","D#","E#","F#","G#");

Fmaj = new Array("F","G","A","Bb","C","D","E");
Dmin = new Array("D","E","F","G","A","Bb","C");

Bflat_maj = new Array("Bb","C","D","Eb","F","G","A");
Gmin = new Array("G","A","Bb","C","D","Eb","F");

Eflat_maj = new Array("Eb","F","G","Ab","Bb","C","D");
Cmin = new Array("C","D","Eb","F","G","Ab","Bb");

Aflat_maj = new Array("Ab","Bb","C","Db","Eb","F","G");
Fmin = new Array("F","G","Ab","Bb","C","Db","Eb");

Dflat_maj = new Array("Db","Eb","F","Gb","Ab","Bb","C");
Bflat_min = new Array("Bb","C","Db","Eb","F","Gb","Ab");

Gflat_maj = new Array("Gb","Ab","Bb","Cb","Db","Eb","F");
Eflat_min = new Array("Eb","F","Gb","Ab","Bb","Cb","Db");

Cflat_maj = new Array("Cb","Db","Eb","Fb","Gb","Ab","Bb");
Aflat_min = new Array("Ab","Bb","Cb","Db","Eb","Fb","Gb");

//function generateNotes(n,scale) {
//    notes = new Array(n);
//    for (let noteCounter = 0; noteCounter < n-1; noteCounter++) {
//        notes[noteCounter] = scale[Math.floor(Math.random()*7)];
//    }
//    return notes;
//}

notes = new Array();

function generateNotes(n,scale) {
    x1 = 8;
    x = 8;
    for (let noteCounter = 0; noteCounter < n; noteCounter++) {
        x1 = x;
        x = Math.random()*7;
        notes[noteCounter] = scale[Math.floor(x)];
        if (Math.floor(x) === Math.floor(x1)) {
            if (Math.floor(x) === 6) {
                x1 = 0;
                notes[noteCounter] = scale[0];
            } else if (Math.floor(x) === 0) {
                x1 = 6;
                notes[noteCounter] = scale[6];
            } else if (Math.floor(x) > 0 && Math.floor(x) < 6) {
                x1 = x - 1;
                notes[noteCounter] = scale[Math.floor(x-1)];
            }
        }
    }
    console.log(notes)
    return notes;
}

function scaleNotes(scale,octaves,direction) {
    var s = scale;
    if (direction == "descending") {
        for (let j = 0; j < octaves-1; j++) {
            scale = scale.concat(s);
        }
        scale = scale.concat(scale[0]);
        return scale;
    } else if (direction == "ascending") {
        s = s.reverse();
        for (let j = 0; j < octaves-1; j++) {
            scale = scale.concat(s);
        }
        note1 = new Array(scale[6]);
        scale = note1.concat(scale);
        return scale;
    } else if (direction == "descending/ascending") {
        for (let j = 0; j < octaves-1; j++) {
            scale = scale.concat(s);
        }
        scale = scale.concat(scale[0]);
        s = s.reverse();
        for (let j = 0; j < octaves; j++) {
            scale = scale.concat(s);
        }
        return scale;
    }
}

chosenScale = new Array();

function selectScale(scale) {
    chosenScale = scale;
    return chosenScale;
}

var scaleMode = "scale"
var randomMode = "random"
chosenMode = new Array();

function selectMode(mode) {
    chosenMode = mode;
    console.log(chosenMode)
    return chosenMode;
}

function getData() {
    var mode = chosenMode;
    var noteCount = document.getElementById("noteCount").value;
    var octaves = document.getElementById("octaves").value;
    var direction = document.getElementById("direction").value;
    var scaleChoice = chosenScale;
    if (mode == "random") {
        var s = selectScale(scaleChoice);
        var n = generateNotes(noteCount,s);
        return n;
    }
    if (mode == "scale") {
        var s = selectScale(scaleChoice);
        console.log(scaleNotes(s,octaves,direction))
        return scaleNotes(s,octaves,direction);
    }
    return mode, noteCount, octaves, direction, scaleChoice;
}
