class Utils {
    static Clamp(val, min, max) {
        return val > max ? max : val < min ? min : val;
    }
    
    static Lerp(a, b, t) {
        return a + (b - a) * t;
    }
    
    static isDouble(n) {
        return Number(n) === n && n % 1 !== 0;
    }
}


export default Utils;