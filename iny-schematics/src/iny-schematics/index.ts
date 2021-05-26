
import { normalize, strings, virtualFs, workspaces } from '@angular-devkit/core';
import { apply, Rule, SchematicContext, Tree, template, url, mergeWith, SchematicsException, move, chain } from '@angular-devkit/schematics';
import { SchemaHolaQuien } from './hola-quien.schema';
// import { buildDefaultPath } from "@schematics/angular/utility/workspace";
// import { parseName } from "@schematics/angular/utility/parse-name";



// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function inySchematics(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    return tree;
  };
}
export function holaMundo(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const path = 'hola-mundo.txt'
    const content = 'Ejemplo de Hola Mundo Schematics'
    tree.create(path, content)
    return tree;
  };
}

export function holaQuien(_options: SchemaHolaQuien): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const path = `hola-${_options.name.toLowerCase()}.txt`
    const content = `Ejemplo de Schematics: Hola ${_options.name}`
    tree.create(path, content)
    return tree;
  };
}

export function holaComponent(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const sourceTemplates = url('./files')
    const applyTemplate = apply(sourceTemplates, [
      template({
        ..._options,
        ...strings
      })
    ])

    return mergeWith(applyTemplate)(tree, _context);
  };
}

export function holaComponentFinal(_options: any): Rule {
  return async (tree: Tree, _context: SchematicContext) => {

    // const ajBuffer: Buffer | null  = tree.read('angular.json')
    // if(!ajBuffer) {
    //   throw new SchematicsException("No estamos en un proyecto de Angular");
    // }
    // parseamos y procesamos la información leida (como buffer)
    /* const ajConfig = JSON.parse(ajBuffer.toString())  */

    const host = createHost(tree)
    const {workspace} = await workspaces.readWorkspace('/', host)
    const projectName = _options.project ? _options.project :
    workspace.extensions.defaultProject

    const project = workspace.projects.get(projectName as string)
    if (!project) {
      throw new SchematicsException('No estamos en un proyecto Angular')
    }

    const projectType = project.extensions.projectType === 'application' ? 'app' : 'lib';
    const path = `${project.sourceRoot}/${projectType}`;

    const sourceTemplates = url('./files')
    const sourceParametrizedTemplates = apply(sourceTemplates, [
      template({
        ...strings,
        name: _options.name
      }),
      move(normalize(path))
    ])

    return chain([
      mergeWith(sourceParametrizedTemplates)
    ]) // (tree, _context)
  }
}

function createHost(tree: Tree): workspaces.WorkspaceHost {
  return {
    async readFile(path: string): Promise<string> {
      const data = tree.read(path);
      if (!data) {
        throw new SchematicsException('File not found.');
      }
      return virtualFs.fileBufferToString(data);
    },
    async writeFile(path: string, data: string): Promise<void> {
      return tree.overwrite(path, data);
    },
    async isDirectory(path: string): Promise<boolean> {
      return !tree.exists(path) && tree.getDir(path).subfiles.length > 0;
    },
    async isFile(path: string): Promise<boolean> {
      return tree.exists(path);
    },
  };
}
