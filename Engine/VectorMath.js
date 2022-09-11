function Clamp(val, min, max) {
    return val > max ? max : val < min ? min : val;
}

function Lerp(a, b, t) {
    return a + (b - a) * t;
}

export {Clamp, Lerp};