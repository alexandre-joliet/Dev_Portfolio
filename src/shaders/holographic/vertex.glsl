varying vec3 vPosition;
varying vec3 vNormal;
uniform float uTime;

#include ../includes/random2D.glsl

void main ()
{
    // Position
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    //** Glitch **//

    // Create a time-based variable that varies per vertex based on its height (y-position)
    // This helps create a wave-like effect that makes the glitch feel more organic.
    float glitchTime = (uTime * 0.1) - modelPosition.y;

    // Generate a glitch strength value by combining multiple sine waves of different frequencies.
    float glitchStrength = sin(glitchTime) + sin(glitchTime * 5.0);
    
    // Normalize the glitch strength by averaging the three sine waves, keeping values in a reasonable range.
    glitchStrength /= 2.0;

    // Apply a smoothstep function to remap the glitch strength, ensuring a smoother transition and reducing artifacts from abrupt changes.
    glitchStrength = smoothstep(0.3, 1.0, glitchStrength);

    // Scale down the effect to keep the distortion subtle.
    glitchStrength *= 0.015;

    // Apply randomized displacement to the x and z coordinates.
    // The `random2D` function generates a pseudo-random value for each vertex based on its xz position and time.
    // Mapping the result from [0,1] to [-1,1] ensures that the movement is bidirectional (both left/right and forward/backward).
    modelPosition.x += (random2D(modelPosition.xz + uTime) * 2.0 - 1.0) * glitchStrength;
    modelPosition.z += (random2D(modelPosition.zx + uTime) * 2.0 - 1.0) * glitchStrength;
        
    // Final position
    vPosition = modelPosition.xyz;
    gl_Position = projectionMatrix * viewMatrix * modelPosition;
    
    // Normal
    vNormal = normal;
    
    // Model normal
    vec4 modelNormal = modelMatrix * vec4(normal, 0.0); // 0.0 will not apply any translation
    vNormal = modelNormal.xyz;
}