uniform float uTime;
uniform sampler2D uPerlinTexture;
varying vec2 vUv;

void main()
{
    // Scale and animate
    vec2 smokeUv = vUv;
    smokeUv.x *= 0.5;
    smokeUv.y *= 0.3;
    smokeUv.y -= uTime * 0.03;
    
    // Smoke
    float smoke = texture(uPerlinTexture, smokeUv).r; // It's a grayscale texture so we do not need a vec4 here and we can only keep the r channel

    // Remap
    smoke = smoothstep(0.5, 1.0, smoke);

    // Edges
    smoke *= smoothstep(0.0, 0.1, vUv.x); // left
    smoke *= smoothstep(1.0, 0.9, vUv.x); // right
    smoke *= smoothstep(0.0, 0.1, vUv.y); // top
    smoke *= smoothstep(1.0, 0.5, vUv.y); // bottom
    

    // Final color
    gl_FragColor = vec4(0.5, 0.5, 0.5, smoke);
    // gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}