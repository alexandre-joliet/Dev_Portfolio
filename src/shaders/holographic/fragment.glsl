varying vec3 vPosition;
varying vec3 vNormal;
uniform float uTime;
uniform vec3 uColor;

void main ()
{   
    // Normal
    vec3 normal = normalize(vNormal);
    if (!gl_FrontFacing)
        normal *= -1.0; 
   
    // Stripes
    float stripes = mod((vPosition.y - uTime * 0.0025) * 200.0, 1.0);
    float stripesH = mod((vPosition.x - uTime * 0.0025) * 200.0, 1.0);

    stripes = pow(stripes, 3.0);

    // Fresnel
    vec3 viewDirection = normalize(vPosition - cameraPosition); // normalize make sure that values have a length of 1
    float fresnel = dot(viewDirection, normal) + 1.0;
    fresnel = pow(fresnel, 2.0);

    // Falloff
    float falloff = smoothstep(0.8, 0.0, fresnel);

    // Holographic
    float holographic = stripes * fresnel;
    holographic += fresnel * 1.25 ;
    holographic *= falloff;

    // Final color
    gl_FragColor = vec4(uColor, holographic);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>


    // // Normal
    // vec3 normal = normalize(vNormal);
    // if(!gl_FrontFacing)
    //     normal *= -1.0;
    
    // // Stripes
    // float stripes = mod((vPosition.y - uTime * 0.02) * 20.0, 1.0);
    // stripes = pow(stripes, 3.0);

    // // Fresnel
    // vec3 viewDirection = normalize(vPosition - cameraPosition);
    // float fresnel = dot(viewDirection, normal) + 1.0;
    // fresnel = pow(fresnel, 2.0);

    // // Falloff
    // float falloff = smoothstep(0.5, 0.0, fresnel);

    // // Holographic
    // float holographic = stripes * fresnel;
    // holographic += fresnel * 1.25;
    // holographic *= falloff;


    // // Final color
    // gl_FragColor = vec4(uColor, holographic);

    // #include <tonemapping_fragment>
    // #include <colorspace_fragment>
}