varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;
uniform sampler2D uPlanetTexture;
uniform sampler2D uPlanetTextureNight;
uniform vec3 uAtmosphereDayColor;
uniform vec3 uAtmosphereTwilightColor;

void main()
{
    vec3 viewDirection = normalize(vPosition - cameraPosition);
    vec3 normal = normalize(vNormal);
    vec3 color = vec3(0.0);

    // Sun orientation
    vec3 uSunDirection = vec3(0.0, 0.0, 1.0);
    float sunCoverage = dot(uSunDirection, normal);
    color = vec3(sunCoverage);

    // Texture
    float dayMix = smoothstep(-0.25, 0.5, sunCoverage);
    vec3 dayColor = texture(uPlanetTexture, vUv).rgb;
    vec3 nightColor = texture(uPlanetTextureNight, vUv).rgb; 
    color = mix(nightColor, dayColor, dayMix);

    // Fresnel to adjust the visibility of the atmosphere depending of the camera
    float fresnel = dot(viewDirection, normal) + 1.0;
    fresnel = pow(fresnel, 2.0);

    // Atmosphere
    float atmosphereDayMix = smoothstep(-0.5, 1.0, sunCoverage);
    vec3 atmosphereColor = mix(uAtmosphereTwilightColor, uAtmosphereDayColor, atmosphereDayMix);
    color = mix(color, atmosphereColor, fresnel * atmosphereDayMix);

    // Final color
    gl_FragColor = vec4(color, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}