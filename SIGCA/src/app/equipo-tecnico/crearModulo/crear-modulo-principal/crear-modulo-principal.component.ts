import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
import { Modulo } from 'src/app/models/modulo';
import { Sesion } from 'src/app/models/sesion';
import { ModulosService } from '../service/modulos.service';
@Component({
  selector: 'SIGCA-crear-modulo-principal',
  templateUrl: './crear-modulo-principal.component.html',
  styleUrls: ['./crear-modulo-principal.component.css'],
})
export class CrearModuloPrincipalComponent implements OnInit {
  estadoUpdateDelete: boolean = false;
  selectModulo: any[] = [];
  sesion: Sesion[] = [];
  nombreModulo = '';
  nombreSesion = '';
  descripcion = '';
  id_modulo: number = 0;
  insModulo: Modulo = new Modulo();
  updateModulo: Modulo = new Modulo();
  selectCategoria: Categoria[] = [];

  @Output() datosSesion: EventEmitter<any> = new EventEmitter();
  @ViewChild('modulo') modulo: ElementRef | any;
  @ViewChild('categoria') categoria: ElementRef | any;

  constructor(private moduloservice: ModulosService) {}

  ngOnInit(): void {
    this.cargarModulos();
  }

  // TODO: ESTE METODO TRAE LOS MODULO PARA PODER MOSTRARLO EN EL COMBO DE LA IZQUIERDA
  cargarModulos(): void {
    this.EliminarModulos();
    this.moduloservice.getModulo().subscribe((data) => {
      data.find((e) => {
        this.selectModulo.push(e);
      });
    });
    // console.log(this.selectModulo.find((e) => console.log(e.id_modulo)));
  }

  EliminarModulos(): void {
    this.moduloservice.getModulo().subscribe((data) => {
      data.find((e) => {
        this.selectModulo.pop();
      });
    });
    // console.log(this.selectModulo.find((e) => console.log(e.id_modulo)));
  }

  abrirModal(): void {
    this.cargarCategoria();
  }

  // TODO: ESTE METODO TRAE LA CATEGORIA PARA PODER MOSTRARLO EN EL COMBO DEL MODAL
  cargarCategoria(): void {
    this.moduloservice.getCategoria().subscribe((data) => {
      // console.log(data);
      this.selectCategoria = data;
    });
  }

  //TODO: OBTIENE EL ID DEL MODULO AL DAR CLICK EN EL MODAL EN SI y trae las sesiones de lo seccionado
  getVal(): void {
    const select = this.modulo.nativeElement;
    const selectdOption = select.options[select.selectedIndex].value;
    this.traerSesion(selectdOption);
    this.id_modulo = selectdOption;
    this.estadoUpdateDelete = true;
  }

  getvalCategoria(): number {
    const select = this.categoria.nativeElement;
    const selectdOption = select.options[select.selectedIndex].value;
    return selectdOption;
  }

  //TODO: GUARDA LOS DATOS DEL MODAL
  guardar(): void {
    this.insModulo.no_modulo = this.nombreModulo;
    this.insModulo.categoria = { id_categoria: this.getvalCategoria() };
    this.moduloservice.insertarModulo(this.insModulo).subscribe((e) => {
      console.log(e);
    });
    this.limpiar();
    this.cargarModulos();
  }

  //TODO: LIMPIA LOS CAMPOS DEL MODAL AL SALIR Y GUARDAR
  limpiar(): void {
    this.insModulo.no_modulo = '';
    const select = this.categoria.nativeElement;
    const selectdOption = select.options[select.selectedIndex];
    selectdOption.value = null;
  }

  traerSesion(id: number): void {
    this.moduloservice.getSesionModulo(id).subscribe((data) => {
      console.log(data);
      this.datosSesion.emit(data);
    });
  }

  deleteModulo() {
    alert(this.id_modulo);
    this.moduloservice.deleteModulo(this.id_modulo).subscribe((data) => {
      console.log(data);
    });
    this.cargarModulos();
  }

  updateModuloLleanarDatos() {
    this.cargarCategoria();
    console.log(this.id_modulo);
    this.moduloservice.getModuloId(this.id_modulo).subscribe((e) => {
      // console.log(e);
      this.updateModulo = e;
    });
  }

  editarModulo() {
    this.insModulo.no_modulo = this.nombreModulo;
    console.log(this.getvalCategoria());
    this.insModulo.categoria = { id_categoria: this.getvalCategoria() };
    this.moduloservice.updateModulo(this.id_modulo, this.insModulo);
    this.limpiar();
    this.cargarModulos();
  }
}
