/*
 * Copyright (C) 2014-2015 Taiga Agile LLC <taiga@taiga.io>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 * File: project-logo.service.spec.coffee
 */

describe("tgProjectLogoService", function() {
    let $provide = null;
    let projectLogoService = null;

    let _inject = () =>
        inject(_tgProjectLogoService_ => projectLogoService = _tgProjectLogoService_)
    ;

    let _setup = () => _inject();

    beforeEach(function() {
        window._version = '123';
        module("taigaCommon");

        return _setup();
    });

    return it("get default project logo", function() {

        let logo = projectLogoService.getDefaultProjectLogo('slug/slug', 2);

        expect(logo.src).to.be.equal('/123/images/project-logos/project-logo-04.png');
        return expect(logo.color).to.be.equal('rgba( 152, 224, 168,  1 )');
    });
});