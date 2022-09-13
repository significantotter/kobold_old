export declare namespace SchemaTypes {
	/* tslint:disable */
	/**
	 * This file was automatically generated by json-schema-to-typescript.
	 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
	 * and run json-schema-to-typescript to regenerate this file.
	 */
	
	export interface KoboldSchemas {
		[k: string]: any;
	}
	/**
	 * an oauth api token for a wanderer's guide character
	 */
	interface WgToken {
		/**
		 * A timestamp indicating when the resource was created.
		 */
		createdAt?: string;
		/**
		 * A timestamp indicating when the resource was most recently updated.
		 */
		updatedAt?: string;
		/**
		 * The discord 'snowflake' typed id of the user who most recently updated the resource.
		 */
		lastUpdatedBy?: string | null;
		/**
		 * The discord 'snowflake' typed id of the user who created the resource.
		 */
		createdBy?: string | null;
		/**
		 * The id of the token request.
		 */
		id?: number;
		/**
		 * The external wanderer's guide character id.
		 */
		characterId?: number;
		/**
		 * the wanderer's guide oauth access token
		 */
		accessToken?: string;
		/**
		 * when the token expires
		 */
		expiresAt?: string;
		/**
		 * the rights granted for the character
		 */
		accessRights?: string;
		/**
		 * the OAUTH token type
		 */
		tokenType?: string;
		[k: string]: any;
	}
	/**
	 * a record of a user requesting a wanderer's guide oauth authorization link
	 */
	interface WgTokenRequest {
		/**
		 * A timestamp indicating when the resource was created.
		 */
		createdAt?: string;
		/**
		 * A timestamp indicating when the resource was most recently updated.
		 */
		updatedAt?: string;
		/**
		 * The discord 'snowflake' typed id of the user who most recently updated the resource.
		 */
		lastUpdatedBy?: string | null;
		/**
		 * The discord 'snowflake' typed id of the user who created the resource.
		 */
		createdBy?: string | null;
		/**
		 * The id of the token request.
		 */
		id?: number;
		/**
		 * The external wanderer's guide character id.
		 */
		characterId?: number;
		/**
		 * The 'snowflake' format discord channel id.
		 */
		channelId?: string;
		/**
		 * unique hash to check the confirmation against to help combat CSRF
		 */
		oauthState?: string;
		/**
		 * when the token request expires
		 */
		expiresAt?: string;
		[k: string]: any;
	}
	
}