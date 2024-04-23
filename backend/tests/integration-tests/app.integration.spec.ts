import 'jest';
import express from 'express';
import request from 'supertest';
import {
    StatusCodes,
} from 'http-status-codes';
import IntegrationHelpers from '../helpers/Integration-helpers';

describe('status integration tests', () => {
    let app: express.Application;
    
    beforeAll(async() => {
        app = await IntegrationHelpers.getApp();
    });


    it('can get default route success', async () => {
        await request(app)
            .get('/')
            .set('Accept', 'application/json')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(StatusCodes.OK);
    });

    it('can get default web route success', async () => {
        await request(app)
            .get('/web')
            .set('Accept', 'application/json')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(StatusCodes.OK);
    });
});
