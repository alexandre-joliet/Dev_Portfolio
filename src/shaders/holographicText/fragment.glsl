varying vec3 vPosition;
varying vec3 vNormal;
uniform float uTime;

void main()
{
    // vec3 localPosition = vPosition - vec3(0.521, 1.075, 1.3555);
    // vec3 color = localPosition * 0.5 + 0.5;

    // Stripes
    float stripes = mod((vPosition.y - uTime * 0.005) * 30.0, 1.0);
    stripes = pow(stripes, 3.0);

    // Fresnel
    // vec3 viewDirection = normalize(vPosition - cameraPosition);
    // float fresnel = dot(viewDirection, vNormal) + 1.0;
    // fresnel = pow(fresnel, 2.0);
    
    
    // Final color
    gl_FragColor = vec4(1.0, 1.0, 1.0, stripes);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}