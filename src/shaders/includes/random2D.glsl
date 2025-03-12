// Simulate randomness
// The fract will get the decimal number of the rest of the complex formula, from 0 to 1
float random2D(vec2 value)
{
    return fract(sin(dot(value.xy, vec2(12.9898,78.233))) * 43758.5453123);
}