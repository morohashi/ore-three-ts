import * as THREE from 'three';
export declare class ObjectMover {
    private objPos;
    private objRot;
    private basePos;
    private goalPos;
    private distancePos;
    private baseRot;
    private goalRot;
    private distanceRot;
    private x;
    private duration;
    private deltaTime;
    private isMoving;
    private onFinish;
    constructor(obj: THREE.Object3D);
    private setBaseTransform;
    move(position: THREE.Vector3, rotation: THREE.Euler, duration: number, callback: Function): void;
    update(): void;
    private sigmoid;
}
