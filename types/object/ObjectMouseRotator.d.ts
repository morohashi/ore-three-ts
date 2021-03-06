import * as THREE from 'three';
export declare class ObjectMouseRotator {
    private target;
    private scrollVel;
    constructor(objs: THREE.Object3D);
    update(): void;
    addVelocity(scrollDelta: THREE.Vector2): void;
}
