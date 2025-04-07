void main()
{
    float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
    float strength = 0.01 / distanceToCenter - 0.01 * 2.0;
    
    strength *= smoothstep(0.1, 1.0, strength);
    
    gl_FragColor = vec4(0.15, 0.15, 0.15, strength * 0.5);
}