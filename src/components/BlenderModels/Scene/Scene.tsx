import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import Emissions from "../Emissions/Emissions";
import Dust from "../../Extras/Dust/Dust";
// import GUI from "lil-gui";

const Scene = () => {
    // const gui = new GUI();

    const debugOptionsScreen = {
        transmission: 1,
        thickness: 0.025,
        roughness: 0.15,
        color: "#000000",
    };

    // gui.add(debugOptionsScreen, "transmission", 0, 1, 0.01).onChange(
    //     (value: number) => (screenMaterial.transmission = value)
    // );
    // gui.add(debugOptionsScreen, "thickness", 0, 1, 0.01).onChange(
    //     (value: number) => (screenMaterial.thickness = value)
    // );

    // gui.add(debugOptionsScreen, "roughness", 0, 1, 0.01).onChange(
    //     (value: number) => (screenMaterial.roughness = value)
    // );

    // gui.addColor(debugOptionsScreen, "color").onChange(() =>
    //     console.log("color has changed")
    // );

    //** Models */
    const hull = useGLTF("/models/hull.glb");
    const pillars = useGLTF("/models/pillars_draco.glb");
    const panels = useGLTF("/models/panels_fix_draco.glb");

    const blockoutSteps = useGLTF("/models/blockouts_steps_draco.glb");
    const extensionRight = useGLTF("/models/extension_right_draco.glb");
    const wallExtras = useGLTF("/models/wall_extras_draco.glb");
    const desk = useGLTF("/models/desk_draco1.glb");
    const holoTop = useGLTF("/models/holo_top_draco.glb");
    const holoBottom = useGLTF("/models/holo_bottom_draco.glb");
    const holoFrame = useGLTF("/models/holo_frame_draco.glb");

    /** Glass */
    const screenDevices = useGLTF("/models/screen_devices_draco.glb");
    const windowGlass = useGLTF("/models/window_glass_draco.glb");

    //** Textures */
    const hullTexture = useTexture("/textures/baked/hull_baked.jpg");
    hullTexture.flipY = false;

    const pillarsTexture = useTexture(
        "/textures/baked/pillars_blockout_baked.jpg"
    );
    pillarsTexture.flipY = false;

    const panelsTexture = useTexture("/textures/baked/panels_baked_2k.jpg");
    panelsTexture.flipY = false;

    const blockoutStepsTexture = useTexture(
        "/textures/baked/blockouts_steps_baked.jpg"
    );
    blockoutStepsTexture.flipY = false;

    const extensionRightTexture = useTexture(
        "/textures/baked/extension_right_baked.jpg"
    );
    extensionRightTexture.flipY = false;

    const wallExtrasTexture = useTexture(
        "/textures/baked/wall_extras_baked.jpg"
    );
    wallExtrasTexture.flipY = false;

    const deskTexture = useTexture("/textures/baked/desk_baked1.jpg");
    deskTexture.flipY = false;

    const holoTopTexture = useTexture("/textures/baked/holo_baked_top_2k.jpg");
    holoTopTexture.flipY = false;
    const holoBottomTexture = useTexture(
        "/textures/baked/holo_baked_bottom_2k.jpg"
    );
    holoBottomTexture.flipY = false;
    const holoFrameTexture = useTexture(
        "/textures/baked/holo_baked_frame_2k.jpg"
    );
    holoFrameTexture.flipY = false;

    const screenMaterial = new THREE.MeshPhysicalMaterial({
        transmission: debugOptionsScreen.transmission,
        thickness: debugOptionsScreen.thickness,
        roughness: debugOptionsScreen.roughness,
        color: debugOptionsScreen.color,
        clearcoat: 1,
    });

    return (
        <>
            <mesh
                geometry={(hull.nodes.Hull as THREE.Mesh).geometry}
                position={(hull.nodes.Hull as THREE.Mesh).position}
            >
                <meshBasicMaterial map={hullTexture}></meshBasicMaterial>
                {/* <Sparkles
                    ref={sparklesRef}
                    color={"#999999"}
                    count={250}
                    speed={0.1}
                    scale={3}
                    size={0.5}
                    opacity={1}
                ></Sparkles> */}
                <Dust></Dust>
            </mesh>

            <mesh
                geometry={(pillars.nodes.AA_pillars as THREE.Mesh).geometry}
                position={(pillars.nodes.AA_pillars as THREE.Mesh).position}
            >
                <meshBasicMaterial map={pillarsTexture}></meshBasicMaterial>
            </mesh>

            <mesh
                geometry={(panels.nodes.AA_panels001 as THREE.Mesh).geometry}
                position={(panels.nodes.AA_panels001 as THREE.Mesh).position}
            >
                <meshBasicMaterial map={panelsTexture}></meshBasicMaterial>
            </mesh>

            <mesh
                geometry={
                    (blockoutSteps.nodes.AA_blockouts_steps as THREE.Mesh)
                        .geometry
                }
                position={
                    (blockoutSteps.nodes.AA_blockouts_steps as THREE.Mesh)
                        .position
                }
            >
                <meshBasicMaterial
                    map={blockoutStepsTexture}
                ></meshBasicMaterial>
            </mesh>

            <mesh
                geometry={
                    (extensionRight.nodes.AA_extension_right as THREE.Mesh)
                        .geometry
                }
                position={
                    (extensionRight.nodes.AA_extension_right as THREE.Mesh)
                        .position
                }
            >
                <meshBasicMaterial
                    map={extensionRightTexture}
                ></meshBasicMaterial>
            </mesh>

            <mesh
                geometry={
                    (wallExtras.nodes.AA_wall_extras as THREE.Mesh).geometry
                }
                position={
                    (wallExtras.nodes.AA_wall_extras as THREE.Mesh).position
                }
            >
                <meshBasicMaterial map={wallExtrasTexture}></meshBasicMaterial>
            </mesh>

            <mesh
                geometry={(desk.nodes.AA_desk as THREE.Mesh).geometry}
                position={(desk.nodes.AA_desk as THREE.Mesh).position}
            >
                <meshBasicMaterial map={deskTexture}></meshBasicMaterial>
            </mesh>

            <mesh
                geometry={(holoTop.nodes.AA_holo_top as THREE.Mesh).geometry}
                position={(holoTop.nodes.AA_holo_top as THREE.Mesh).position}
            >
                <meshBasicMaterial map={holoTopTexture}></meshBasicMaterial>
            </mesh>
            <mesh
                geometry={
                    (holoBottom.nodes.AA_holo_bottom as THREE.Mesh).geometry
                }
                position={
                    (holoBottom.nodes.AA_holo_bottom as THREE.Mesh).position
                }
            >
                <meshBasicMaterial map={holoBottomTexture}></meshBasicMaterial>
            </mesh>
            <mesh
                geometry={
                    (holoFrame.nodes.AA_holo_frame as THREE.Mesh).geometry
                }
                position={
                    (holoFrame.nodes.AA_holo_frame as THREE.Mesh).position
                }
            >
                <meshBasicMaterial map={holoFrameTexture}></meshBasicMaterial>
            </mesh>

            <Emissions />

            <mesh
                geometry={
                    (screenDevices.nodes.AA_screen_devices as THREE.Mesh)
                        .geometry
                }
                position={
                    (screenDevices.nodes.AA_screen_devices as THREE.Mesh)
                        .position
                }
                material={screenMaterial}
            ></mesh>

            <mesh
                geometry={
                    (windowGlass.nodes.Window_glass as THREE.Mesh).geometry
                }
                position={
                    (windowGlass.nodes.Window_glass as THREE.Mesh).position
                }
            >
                {" "}
                <meshPhysicalMaterial
                    transparent={true}
                    roughness={0.25}
                    transmission={1}
                    opacity={0.5}
                ></meshPhysicalMaterial>
            </mesh>
        </>
    );
};

export default Scene;
