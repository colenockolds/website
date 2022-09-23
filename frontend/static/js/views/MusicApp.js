import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Note Practice App");
    }

    async getHtml() {
        return `
            <h1>Note Practice App</h1>
            <script src="../libraries/pitchdetect.js"></script>
            <p>BPM:</p>
            <input type="number" id="bpm" min="1" max="300" placeholder="Please Enter BPM" required>
            <button onclick="metronomeSound()">Toggle Metronome</button>
            <br>
            <div>
                <img src="/static/js/views/staff.jpg" alt="staff lines" width="600" height="350">
                <img src="/static/js/views/Circle-of-Fifths.webp" alt="staff lines" width="400" height="400">
            </div>
            <div>
                <h3>Select Mode:</h3>
                <button button onclick="selectMode(scaleMode)">Scale</button>
                <button button onclick="selectMode(randomMode)">Random</button>
                <br>
                <input type="number" id="noteCount" placeholder="Number of Notes" required>
                <input type="number" id="octaves" min="1" max="3" placeholder="Number of Octaves" required>
                <input type="text" id="direction" placeholder="Scale Direction" required>
                <h3>Major Scales</h3>
                <button onclick="selectScale(Cmaj)">C Major</button>
                <button onclick="selectScale(Gmaj)">G Major</button>
                <button onclick="selectScale(Dmaj)">D Major</button>
                <button onclick="selectScale(Amaj)">A Major</button>
                <button onclick="selectScale(Emaj)">E Major</button>
                <button onclick="selectScale(Bmaj)">B Major</button>
                <button onclick="selectScale(Fsharp_maj)">F# Major</button>
                <br>
                <button onclick="selectScale(Cmaj)">F Major</button>
                <button onclick="selectScale(Bflat_maj)">Bb Major</button>
                <button onclick="selectScale(Eflat_maj)">Eb Major</button>
                <button onclick="selectScale(Aflat_maj)">Ab Major</button>
                <button onclick="selectScale(Dflat_maj)">Db Major</button>
                <button onclick="selectScale(Gflat_maj)">Gb Major</button>
                <button onclick="selectScale(Cflat_maj)">Cb Major</button>
                <h3>Minor Scales</h3>
                <button onclick="selectScale(Amin)">A Minor</button>
                <button onclick="selectScale(Emin)">E Minor</button>
                <button onclick="selectScale(Bmin)">B Minor</button>
                <button onclick="selectScale(Fsharp_min)">F# Minor</button>
                <button onclick="selectScale(Csharp_min)">C# Minor</button>
                <button onclick="selectScale(Gsharp_min)">G# Minor</button>
                <button onclick="selectScale(Dsharp_min)">D# Minor</button>
                <br>
                <button onclick="selectScale(Dmin)">D Minor</button>
                <button onclick="selectScale(Gmin)">G Minor</button>
                <button onclick="selectScale(Cmin)">C Minor</button>
                <button onclick="selectScale(Fmin)">F Minor</button>
                <button onclick="selectScale(Bflat_min)">Bb Minor</button>
                <button onclick="selectScale(Eflat_min)">Eb Minor</button>
                <button onclick="selectScale(Aflat_min)">Ab Minor</button>
                <p>Select a scale to practice.</p>
                <button onclick="getData()">Begin</button>
            </div>
            <p>
                <a href="/" data-link>Return Home</a>
            </p>
            <script src="../libraries/pitchdetect.js"></script>
            <p><button onclick="startPitchDetect();">Start</button></p>
        `;
    }
}
