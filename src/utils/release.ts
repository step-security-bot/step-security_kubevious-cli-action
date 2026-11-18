import axios from 'axios';

export async function getLatestReleaseTag()
{
    const RELEASE_URL = 'https://api.github.com/repos/step-security/kubevious-cli-action/releases/latest';
    const result = await axios.get(RELEASE_URL)

    const tag = result?.data?.tag_name;
    if (!tag) {
        throw new Error("Could not get the release tag.");
    }

    return tag;
}