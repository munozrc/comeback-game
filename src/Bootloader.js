import Phaser from 'phaser'

export default class Bootloader extends Phaser.Scene {

    constructor() {
        super({key: 'Bootloader', active: true})
    }

    preload() {
        this.load.path = 'images/'
        this.load.image('logo_phaser', 'logos/phaser.png')
        this.load.image('logo_bestcresw', 'logos/bestcrew-studios.png')
        this.load.image('btn_fullscreen', 'icons/maximize.png')
        this.load.image('player', 'sprites/bird.png')

        // Intrucciones
        this.load.atlas('right', 'sprites/right.png', 'sprites/right_atlas.json')
        this.load.image('panel', 'sprites/panel.png')
    }

    create() {
        this.scene.start('Game')
    }
}